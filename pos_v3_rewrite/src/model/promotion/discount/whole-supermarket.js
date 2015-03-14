var _ = require('lodash');
var Discount = require('./discount');

function WholeSupermarket(discountRate, cartItems, itemName) {
    Discount.call(this,discountRate, cartItems);
    this.itemName = itemName;
    this.bePromotionMoney = 0;
    this.characterDiscount = '';
}

WholeSupermarket.prototype = Object.create(Discount.prototype);
WholeSupermarket.prototype.constructor = WholeSupermarket;

WholeSupermarket.prototype.getBePromotionMoney = function() {
    this.bePromotionMoney = this.getTotalMoney(this.removeCartItem());
    return this.bePromotionMoney;
};

WholeSupermarket.prototype.buildPromotionInfo = function() {
    return '名称：' + this.numberTransferCharacter(this.discountRate * 100) +
           '折，金额：' + this.getPromotionMoney() + '元\n';
};

module.exports = WholeSupermarket;