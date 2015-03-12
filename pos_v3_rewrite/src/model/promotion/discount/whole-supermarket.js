var _ = require('lodash');
var Discount = require('./discount');

function WholeSupermarket(discountRate, totalMoney) {
    Discount.call(this,discountRate, totalMoney);
}

WholeSupermarket.prototype = Object.create(Discount.prototype);
WholeSupermarket.prototype.constructor = WholeSupermarket;

WholeSupermarket.prototype.buildPromotionInfo = function() {
    return '名称：' + this.discountRate * 10 + '折，金额：' + this.getPromotionMoney() + '元\n';
};

module.exports = WholeSupermarket;