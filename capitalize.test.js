const capitalizeString = require('./capitalize');

describe('capitalize String', () => {
    test('should return Edenlisk', () => {
        const result = capitalizeString('edenlisk');
        expect(result).toEqual('Edenlisk');
    })
    test('should return Microverse', () => {
        const result = capitalizeString('microverse');
        expect(result).toEqual('Microverse');
    })
})