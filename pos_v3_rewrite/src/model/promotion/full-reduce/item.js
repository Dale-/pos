var _ = require('lodash');
var FullReduce = require('./full-reduce');

function Item(fullMoney, reducedMoney, totalMoney, itemName, cartItems) {
    FullReduce.call(this, fullMoney, reducedMoney, totalMoney, cartItems);
    this.itemName = itemName;
}

Item.prototype = Object.create(FullReduce.prototype);
Item.prototype.constructor = Item;

Item.prototype.getBePromotionMoney = function() {
    this.bePromotionMoney = this.getCartItem().getSubTotal();
};

Item.prototype.buildPromotionInfo = function() {
    return '名称：' + this.brand +
           '满' + this.fullMoney + '减' + this.reducedMoney + '，' +
           '金额：' + this.getPromotionMoney() + '元\n';
};

module.exports = Item;