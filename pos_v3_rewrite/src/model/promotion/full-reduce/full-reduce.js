var Promotion = require('../promotion');

function FullReduce(fullMoney, reducedMoney, totalMoney, cartItems) {
    Promotion.call(this, cartItems);
    this.fullMoney = fullMoney;
    this.totalMoney = totalMoney;
    this.reducedMoney = reducedMoney;
}

FullReduce.prototype = Object.create(Promotion.prototype);
FullReduce.prototype.constructor = FullReduce;

FullReduce.prototype.getPromotionMoney = function() {
    return Math.floor(this.totalMoney / this.fullMoney) * this.reducedMoney;
};

module.exports = FullReduce;