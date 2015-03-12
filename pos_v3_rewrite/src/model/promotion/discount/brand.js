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

Brand.prototype.calculateSubtotal = function() {

};

Brand.prototype.buildPromotionInfo = function() {
    return '名称：' + brand + '品牌打折，金额：' + this.promotionMoney + '元\n';
};

module.exports = Brand;