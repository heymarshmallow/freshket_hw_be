const Calculator = require('../src/models/calculator');

describe('Calculator', () => {
    it('Customers order Red set and Green set; price from calculation is 90', () => {
        const calculator = new Calculator(false);
        const order = { 'Red': 1, 'Green': 1 };
        expect(calculator.calculatePrice(order)).toBe('90.00');
    });
    it('Customers can use a member card, then the price should be deducted by discount amount 10%', () => {
        const calculator = new Calculator(true);
        const order = { 'Red': 1, 'Green': 1 };
        expect(calculator.calculatePrice(order)).toBe('81.00');
    });
    it('For Orange sets, if customers order 5 items per bill. customers will get a 5% discount for 4 items (2 pairs)', () => {
        const calculator = new Calculator(false);
        const order = { 'Orange': 5 };
        expect(calculator.calculatePrice(order)).toBe('576.00');
    });
    // it('should calculate order without member card correctly', () => {
    //     const calculator = new Calculator(false);
    //     const order = { 'Red': 1, 'Green': 1 };
    //     expect(calculator.calculatePrice(order)).toBe('90.00');

    //     const anotherOrder = { 'Orange': 5, 'Pink': 5};
    //     expect(calculator.calculatePrice(anotherOrder)).toBe('960.00');
    // });
    // it('should calculate order with member card correctly', () => {
    //     const calculator = new Calculator(true);
    //     const order = { 'Red': 1, 'Green': 1 };
    //     expect(calculator.calculatePrice(order)).toBe('81.00');

    //     const anotherOrder = { 'Orange': 5, 'Pink': 5};
    //     expect(calculator.calculatePrice(anotherOrder)).toBe('864.00');
    // });
});
