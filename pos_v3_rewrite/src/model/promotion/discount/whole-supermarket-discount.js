var _ = require('lodash');
var Discount = require('./discount');

function WholeSupermarketDiscount(discountRate, bePromotionMoney, itemName) {
    Discount.call(this,discountRate);
    this.itemName = itemName;
    //this.characterDiscount = '';
    this.bePromotionMoney = bePromotionMoney;
}

WholeSupermarketDiscount.prototype = Object.create(Discount.prototype);
WholeSupermarketDiscount.prototype.constructor = WholeSupermarketDiscount;

WholeSupermarketDiscount.prototype.getBePromotionMoney = function() {
    return this.bePromotionMoney;
};

WholeSupermarketDiscount.prototype.buildPromotionInfo = function() {
    return '名称：' + this.numberTransferCharacter(this.discountRate * 100) +
           '折，金额：' + this.getPromotionMoney() + '元\n';
};

module.exports = WholeSupermarketDiscount;