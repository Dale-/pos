var Promotion = require('../promotion');

function Discount(discountRate, cartItems) {
    Promotion.call(this, cartItems);
    this.discountRate = discountRate;
}

Discount.prototype = Object.create(Promotion.prototype);
Discount.prototype.constructor = Discount;

Discount.prototype.getPromotionMoney = function() {
    this.getBePromotionMoney();
    return (this.totalMoney * (1 - this.discountRate)).toFixed(2);
};

module.exports = Discount;