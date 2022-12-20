const Calculator = require('./calculator')
describe('Calculator', () => {
    const calculator = new Calculator();
    test('7 add 20 to equal 27', () => {
        const result = calculator.add(7, 20);
        expect(result).toEqual(27);
    })
    test('100 add 20 to equal 120', () => {
        const result = calculator.add(100, 20);
        expect(result).toEqual(120);
    })
    test('-4 add 29 to equal 25', () => {
        const result = calculator.add(-4, 29);
        expect(result).toEqual(25);
    })

    test('17 subtract 5 to equal 12', () => {
        const result = calculator.subtract(17, 5);
        expect(result).toEqual(12);
    })
    test('10 subtract 4 to equal 6', () => {
        const result = calculator.subtract(10, 4);
        expect(result).toEqual(6);
    })
    test('260 subtract 40 to equal 220', () => {
        const result = calculator.subtract(260, 40);
        expect(result).toEqual(220);
    })
    test('4 multiply 5 to equal 20', () => {
        const result = calculator.multiply(4, 5);
        expect(result).toEqual(20);
    })
    test('158 multiply 278 to equal 43924', () => {
        const result = calculator.multiply(158, 278);
        expect(result).toEqual(43924);
    })
    test('-763 multiply -483 to equal 368529', () => {
        const result = calculator.multiply(-763, -483);
        expect(result).toEqual(368529);
    })
    test('30 divide 6 to equal 5', () => {
        const result = calculator.divide(30, 6);
        expect(result).toEqual(5);
    })
    test('48 divide 6 to equal 8', () => {
        const result = calculator.divide(48, 6);
        expect(result).toEqual(8);
    })
    test('45 divide 15 to equal 3', () => {
        expect(() => {
            calculator.divide(45, 'hello');
        }).toThrow("Invalid");
    })

})