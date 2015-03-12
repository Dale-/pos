function Discount(discountRate, totalMoney) {
    this.discountRate = discountRate;
    this.totalMoney = totalMoney;
}

Discount.prototype.getPromotionMoney = function() {
    return (this.totalMoney * (1 - this.discountRate)).toFixed(2);
};

module.exports = Discount;