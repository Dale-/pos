var _ = require('lodash');
var Discount = require('./discount');

function Item(discountRate, cartItems, itemName) {
    Discount.call(this,discountRate, cartItems);
    this.itemName = itemName;
    this.totalMoney = 0;
}

Item.prototype = Object.create(Discount.prototype);
Item.prototype.constructor = Item;

Item.prototype.getBePromotionMoney = function() {
    this.totalMoney = this.getCartItem().getSubTotal();
};

Item.prototype.buildPromotionInfo = function() {
    return '名称：' + this.itemName + '单品打折，金额：' + this.getPromotionMoney() + '元\n';
};

module.exports = Item;