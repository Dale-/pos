function Discount(discountRate, totalMoney) {
    this.discountRate = discountRate;
    this.totalMoney = totalMoney;
}

Discount.prototype.getPromotionMoney = function() {
    this.promotionMoney = (this.totalMoney * (1 - this.discountRate)).toFixed(2);
    return this.promotionMoney;
};

module.exports = Discount;