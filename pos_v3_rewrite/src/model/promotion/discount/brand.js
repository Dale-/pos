var _ = require('lodash');
var Discount = require('./discount');

function Brand(discountRate, cartItems, brand) {
    Discount.call(this,discountRate, cartItems);
    this.brand = brand;
    this.bePromotionMoney = 0;
}

Brand.prototype = Object.create(Discount.prototype);
Brand.prototype.constructor = Brand;

Brand.prototype.getBePromotionMoney = function() {
    this.bePromotionMoney = this.getTotalMoney(this.getBrandCartItems());
    return this.bePromotionMoney;
};

Brand.prototype.buildPromotionInfo = function() {
    return '名称：' + this.brand + '品牌打折，金额：' + this.getPromotionMoney() + '元\n';
};

module.exports = Brand;