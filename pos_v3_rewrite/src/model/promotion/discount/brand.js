var Discount = require('./discount');

function Brand(discountRate, cartItems, brand) {
    Discount.call(this,discountRate);
    this.cartItems = cartItems;
    this.brand = brand;
    this.subtotal = 0;
    this.promotionMoney = 0;
}

Brand.prototype = Object.create(Discount.prototype);
Brand.prototype.constructor = Brand;

Brand.prototype.buildPromotionInfo = function() {

};

module.exports = Brand;