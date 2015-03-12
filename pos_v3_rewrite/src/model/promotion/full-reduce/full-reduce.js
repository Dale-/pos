function FullReduce(fullMoney, reducedMoney, totalMoney) {
    this.fullMoney = fullMoney;
    this.reducedMoney = reducedMoney;
    this.totalMoney = totalMoney;
}

FullReduce.prototype.getPromotionMoney = function() {
    this.promotionMoney = (this.totalMoney * (1 - this.discountRate)).toFixed(2);
    return this.promotionMoney;
};

module.exports = FullReduce;