var _ = require('lodash');
var Discount = require('./discount');

function BrandDiscount(discountRate, cartItems, brand) {
    Discount.call(this,discountRate, cartItems);
    this.brand = brand;
    this.bePromotionMoney = 0;
}

BrandDiscount.prototype = Object.create(Discount.prototype);
BrandDiscount.prototype.constructor = BrandDiscount;

BrandDiscount.prototype.getBePromotionMoney = function() {
    this.bePromotionMoney = this.getTotalMoney(this.cartItems);
    return this.bePromotionMoney;
};

BrandDiscount.prototype.buildPromotionInfo = function() {
    if(this.cartItems) {
        return '名称：' + this.brand + '品牌打折，金额：' + this.getPromotionMoney() + '元\n';
    } else {
        return '';
    }

};

module.exports = BrandDiscount;