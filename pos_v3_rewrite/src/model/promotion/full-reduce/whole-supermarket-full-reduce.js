var _ = require('lodash');
var FullReduce = require('./full-reduce');

function WholeSupermarketFullReduce(fullMoney, reducedMoney, cartItems, itemName) {
    FullReduce.call(this, fullMoney, reducedMoney, cartItems);
    this.itemName = itemName;
    this.bePromotionMoney = 0;
    this.characterDiscount = '';
}

WholeSupermarketFullReduce.prototype = Object.create(FullReduce.prototype);
WholeSupermarketFullReduce.prototype.constructor = WholeSupermarketFullReduce;

WholeSupermarketFullReduce.prototype.getBePromotionMoney = function() {
    this.bePromotionMoney = this.getTotalMoney(this.removeCartItem());
    return this.bePromotionMoney;
};

WholeSupermarketFullReduce.prototype.buildPromotionInfo = function() {
    return '名称：满' + this.fullMoney + '减' + this.reducedMoney + '，' +
           '金额：' + this.getPromotionMoney() + '元\n';
};

module.exports = WholeSupermarketFullReduce;