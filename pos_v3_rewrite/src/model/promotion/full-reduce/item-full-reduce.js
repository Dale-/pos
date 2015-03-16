var _ = require('lodash');
var FullReduce = require('./full-reduce');

function ItemFullReduce(fullMoney, reducedMoney, totalMoney, itemName, cartItem) {
    FullReduce.call(this, fullMoney, reducedMoney, totalMoney);
    this.itemName = itemName;
    this.cartItem = cartItem;
}

ItemFullReduce.prototype = Object.create(FullReduce.prototype);
ItemFullReduce.prototype.constructor = ItemFullReduce;

ItemFullReduce.prototype.getBePromotionMoney = function() {
    this.bePromotionMoney = (this.cartItem).getSubTotal();
    return this.bePromotionMoney;
};

ItemFullReduce.prototype.buildPromotionInfo = function() {
    return '名称：' + this.brand +
           '满' + this.fullMoney + '减' + this.reducedMoney + '，' +
           '金额：' + this.getPromotionMoney() + '元\n';
};

module.exports = ItemFullReduce;