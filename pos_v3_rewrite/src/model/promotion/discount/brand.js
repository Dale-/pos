var _ = require('lodash');
var Discount = require('./discount');

function Brand(discountRate, totalMoney, brand) {
    Discount.call(this,discountRate, totalMoney);
    this.brand = brand;
    this.promotionMoney = 0;
}

Brand.prototype = Object.create(Discount.prototype);
Brand.prototype.constructor = Brand;

Brand.prototype.buildPromotionInfo = function() {
    return '名称：' + brand + '品牌打折，金额：' + this.promotionMoney + '元\n';
};

module.exports = Brand;