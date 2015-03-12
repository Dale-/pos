function FullReduce(fullMoney, reducedMoney, totalMoney) {
    this.fullMoney = fullMoney;
    this.totalMoney = totalMoney;
    this.reducedMoney = reducedMoney;
}

FullReduce.prototype.getPromotionMoney = function() {
    return Math.floor(this.totalMoney / this.fullMoney) * this.reducedMoney;
};

module.exports = FullReduce;