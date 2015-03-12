var _ = require('lodash');
var Discount = require('./discount');

function Item(discountRate, totalMoney, itemName) {
    Discount.call(this,discountRate, totalMoney);
    this.itemName = itemName;
}

Item.prototype = Object.create(Discount.prototype);
Item.prototype.constructor = Item;

Item.prototype.buildPromotionInfo = function() {
    return '名称：' + this.itemName + '单品打折，金额：' + this.getPromotionMoney() + '元\n';
};

module.exports = Item;