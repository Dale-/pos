var _ = require('lodash');
var Discount = require('./discount');

function WholeSupermarket(discountRate, cartItems, itemName) {
    Discount.call(this,discountRate, cartItems);
    this.itemName = itemName;
    this.bePromotionMoney = 0;
}

WholeSupermarket.prototype = Object.create(Discount.prototype);
WholeSupermarket.prototype.constructor = WholeSupermarket;

WholeSupermarket.prototype.getBePromotionMoney = function() {
    this.bePromotionMoney = this.getTotalMoney(this.removeCartItem());
};

WholeSupermarket.prototype.buildPromotionInfo = function() {
    return '名称：' + this.discountRate * 10 + '折，金额：' + this.getPromotionMoney() + '元\n';
};

module.exports = WholeSupermarket;