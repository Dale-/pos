function Discount(discountRate) {
    this.discountRate = discountRate;
    this.subtotal = 0;
    this.promotionMoney = 0;
}

Discount.prototype.getPromotionMoney = function() {
    this.promotionMoney = (this.subtotal * (1 - this.discountRate)).toFixed(2);
    return this.promotionMoney;
};