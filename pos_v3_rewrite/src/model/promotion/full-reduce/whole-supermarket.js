var _ = require('lodash');
var FullReduce = require('./full-reduce');

function WholeSupermarket(fullMoney, reducedMoney, cartItems, itemName) {
    FullReduce.call(this, fullMoney, reducedMoney, cartItems);
    this.itemName = itemName;
    this.bePromotionMoney = 0;
}

WholeSupermarket.prototype = Object.create(FullReduce.prototype);
WholeSupermarket.prototype.constructor = WholeSupermarket;

WholeSupermarket.prototype.getBePromotionMoney = function() {
    this.bePromotionMoney = this.getTotalMoney(this.removeCartItem());
};

WholeSupermarket.prototype.buildPromotionInfo = function() {
    return '满' + this.fullMoney +
           '减' + this.reducedMoney + '，' +
           '金额：' + this.getPromotionMoney() + '元\n';
};

module.exports = WholeSupermarket;