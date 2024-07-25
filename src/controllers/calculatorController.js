const Calculator = require('../models/calculator');

exports.calculatePrice = (req, res) => {
    if (!req.body.order) return res.status(400).json({ error: 'Missing order data' });

    const { order, hasMemberCard } = req.body;
    const calculator = new Calculator(hasMemberCard);
    const [errorFlag, missingMenus, price] = calculator.calculatePrice(order);

    if (errorFlag) {
        return res.status(400).json({
            error: 'Some items are not in the menu',
            missingMenus
        });
    }

    return res.json({ price });
};
