var _ = require('lodash');
var FullReduce = require('./full-reduce');

function WholeSupermarketFullReduce(fullMoney, reducedMoney, bePromotionMoney) {
    FullReduce.call(this, fullMoney, reducedMoney);
    this.characterDiscount = '';
    this.bePromotionMoney = bePromotionMoney;

}

WholeSupermarketFullReduce.prototype = Object.create(FullReduce.prototype);
WholeSupermarketFullReduce.prototype.constructor = WholeSupermarketFullReduce;

WholeSupermarketFullReduce.prototype.getBePromotionMoney = function() {
    return this.bePromotionMoney;
};

WholeSupermarketFullReduce.prototype.buildPromotionInfo = function() {
    return '名称：满' + this.fullMoney + '减' + this.reducedMoney + '，' +
           '金额：' + this.getPromotionMoney() + '元\n';
};

module.exports = WholeSupermarketFullReduce;