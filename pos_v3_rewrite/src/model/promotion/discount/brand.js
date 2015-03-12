var _ = require('lodash');
var Discount = require('./discount');

function Brand(discountRate, totalMoney, brand) {
    Discount.call(this,discountRate, totalMoney);
    this.brand = brand;
}

Brand.prototype = Object.create(Discount.prototype);
Brand.prototype.constructor = Brand;

Brand.prototype.buildPromotionInfo = function() {
    return '名称：' + this.brand + '品牌打折，金额：' + this.getPromotionMoney() + '元\n';
};

module.exports = Brand;