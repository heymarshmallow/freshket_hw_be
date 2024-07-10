class Calculator {
    constructor(hasMemberCard = false) {
        this.menu = {
            'Red': 50,
            'Green': 40,
            'Blue': 30,
            'Yellow': 50,
            'Pink': 80,
            'Purple': 90,
            'Orange': 120
        };
        this.discountRates = {
            'Orange': 0.05,
            'Pink': 0.05,
            'Green': 0.05
        };
        this.hasMemberCard = hasMemberCard;
    }

    calculatePrice(order) {
        let total = 0;
        let discounts = 0;
        let discountRates = this.discountRates;
        
        for (const [item, quantity] of Object.entries(order)) {
            const pricePerItem = this.menu[item];
            total += pricePerItem * quantity;
        
            if (discountRates.hasOwnProperty(item)) {
                const pairs = Math.floor(quantity / 2);
                const pricePerPairs = pricePerItem * 2;
                discounts += pairs * pricePerPairs * discountRates[item];
            }
        }
        total -= discounts;
        if (this.hasMemberCard) {
            total *= 0.9;
        }
        return total.toFixed(2);
    }
}

module.exports = Calculator;
