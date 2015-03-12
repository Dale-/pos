function Discount(discountRate) {
    this.discountRate = discountRate;
}

Discount.prototype.getPromotionMoney = function() {
    this.promotionMoney = (this.subtotal * (1 - this.discountRate)).toFixed(2);
    return this.promotionMoney;
};

module.exports = Discount;