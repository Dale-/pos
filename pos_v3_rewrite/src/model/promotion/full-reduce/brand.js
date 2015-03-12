var _ = require('lodash');
var FullReduce = require('./full-reduce');

function Brand(fullMoney, reducedMoney, totalMoney, brand, cartItems) {
    FullReduce.call(this, fullMoney, reducedMoney, totalMoney, cartItems);
    this.brand = brand;
}

Brand.prototype = Object.create(FullReduce.prototype);
Brand.prototype.constructor = Brand;

Brand.prototype.buildPromotionInfo = function() {
    return '名称：' + this.brand +
           '品牌满' + this.fullMoney + '减' + this.reducedMoney + '，' +
           '金额：' + this.getPromotionMoney() + '元\n';
};

module.exports = Brand;