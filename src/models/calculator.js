class Calculator {
    constructor(hasMemberCard = false) {
        this.menu = {
            'Red': 50,
            'Green': 40,
            'Blue': 30,
            'Yellow': 50,
            'Pink': 80,
            'Purple': 90,
            'Orange': 120,
            'Black': 200
        };
        this.pro1DiscountRates = {
            'Orange': 0.05,
            'Pink': 0.05,
            'Green': 0.05
        };
        this.pro2DiscountRates = {
            'Black': 0.2
        };
        this.hasMemberCard = hasMemberCard;
    }

    calculatePrice(order) {
        let total = 0;
        let discounts = 0;
        let errorFlag = false;
        let missingMenus = [];

        for (const [item, quantity] of Object.entries(order)) {
            if (!this.menu.hasOwnProperty(item)) {
                errorFlag = true;
                missingMenus.push(item); // เก็บรายการที่ไม่พบ
            } else {
                const pricePerItem = this.menu[item];
                total += pricePerItem * quantity;

                if (this.pro1DiscountRates.hasOwnProperty(item)) {
                    const pairs = Math.floor(quantity / 2);
                    const discountPerPair = pricePerItem * this.pro1DiscountRates[item] * 2;
                    discounts += pairs * discountPerPair;
                }

                if (this.pro2DiscountRates.hasOwnProperty(item)) {
                    const triplets = Math.floor(quantity / 3);
                    const discountPerTriplet = pricePerItem * this.pro2DiscountRates[item] * 3;
                    discounts += triplets * discountPerTriplet;
                }
            }
        }

        total -= discounts;

        if (this.hasMemberCard) {
            total *= 0.9;
        }

        return [errorFlag, missingMenus, total.toFixed(2)]; // คืนค่าอาร์เรย์ที่ประกอบด้วย flagError, missingMenus และ total
    }
}

module.exports = Calculator;
