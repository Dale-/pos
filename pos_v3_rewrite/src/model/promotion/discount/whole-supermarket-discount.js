var _ = require('lodash');
var Discount = require('./discount');

function WholeSupermarketDiscount(discountRate, cartItems, itemName) {
    Discount.call(this,discountRate, cartItems);
    this.itemName = itemName;
    this.bePromotionMoney = 0;
    this.characterDiscount = '';
}

WholeSupermarketDiscount.prototype = Object.create(Discount.prototype);
WholeSupermarketDiscount.prototype.constructor = WholeSupermarketDiscount;

WholeSupermarketDiscount.prototype.getBePromotionMoney = function() {
    this.bePromotionMoney = this.getTotalMoney(this.removeCartItem());
    return this.bePromotionMoney;
};

WholeSupermarketDiscount.prototype.buildPromotionInfo = function() {
    return '名称：' + this.numberTransferCharacter(this.discountRate * 100) +
           '折，金额：' + this.getPromotionMoney() + '元\n';
};

module.exports = WholeSupermarketDiscount;