var Promotion = require('../promotion');

function FullReduce(fullMoney, reducedMoney, cartItems) {
    Promotion.call(this, cartItems);
    this.fullMoney = fullMoney;
    this.reducedMoney = reducedMoney;
}

FullReduce.prototype = Object.create(Promotion.prototype);
FullReduce.prototype.constructor = FullReduce;

FullReduce.prototype.getPromotionMoney = function() {
    this.getBePromotionMoney();
    return Math.floor(this.bePromotionMoney / this.fullMoney) * this.reducedMoney;
};

module.exports = FullReduce;