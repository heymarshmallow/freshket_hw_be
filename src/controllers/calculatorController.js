const Calculator = require('../models/calculator');

exports.calculatePrice = (req, res) => {
    if (!req.body.order) return res.status(400).json({ error: 'Missing order data' });
    const { order, hasMemberCard } = req.body;
    const calculator = new Calculator(hasMemberCard);
    const price = calculator.calculatePrice(order);
    return res.json({ price });
};
