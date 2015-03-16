var _ = require('lodash');
var Discount = require('./discount');

function ItemDiscount(discountRate, cartItem, itemName) {
    Discount.call(this,discountRate);
    this.cartItem = cartItem;
    this.itemName = itemName;
    this.bePromotionMoney = 0;
}

ItemDiscount.prototype = Object.create(Discount.prototype);
ItemDiscount.prototype.constructor = ItemDiscount;

ItemDiscount.prototype.getBePromotionMoney = function() {
    this.bePromotionMoney = (this.cartItem).getSubTotal();
    return this.bePromotionMoney;
};

ItemDiscount.prototype.buildPromotionInfo = function() {
    return '名称：' + this.itemName + '单品打折，金额：' + this.getPromotionMoney() + '元\n';
};

module.exports = ItemDiscount;