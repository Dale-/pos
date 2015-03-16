var _ = require('lodash');
var FullReduce = require('./full-reduce');

function BrandFullReduce(fullMoney, reducedMoney, cartItems, brand) {
    FullReduce.call(this, fullMoney, reducedMoney);
    this.brand = brand;
    this.cartItems = cartItems;
    this.bePromotionMoney = 0;
}

BrandFullReduce.prototype = Object.create(FullReduce.prototype);
BrandFullReduce.prototype.constructor = BrandFullReduce;

BrandFullReduce.prototype.getBePromotionMoney = function() {
    this.bePromotionMoney = this.getTotalMoney(this.cartItems);
    return this.bePromotionMoney;
};

BrandFullReduce.prototype.buildPromotionInfo = function() {
    return '名称：' + this.brand +
           '品牌满' + this.fullMoney + '减' + this.reducedMoney + '，' +
           '金额：' + this.getPromotionMoney() + '元\n';
};

module.exports = BrandFullReduce;