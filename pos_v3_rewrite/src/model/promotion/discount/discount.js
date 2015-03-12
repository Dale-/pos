function Discount(discountRate, cartItems) {
    this.discountRate = discountRate;
    this.cartItems = cartItems;
}

Discount.prototype.getPromotionMoney = function() {
    return (this.totalMoney * (1 - this.discountRate)).toFixed(2);
};

module.exports = Discount;