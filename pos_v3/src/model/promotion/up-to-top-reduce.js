var _ = require('lodash');

function UpToTopReduce() {

}

UpToTopReduce.brand = function(cartItems, topNum, savingNum, brand) {
    var brandMoney = this.calculateSavingMoney(cartItems, topNum, savingNum);
    return '名称：' + brand + '品牌满' + topNum + '减' + savingNum +'，金额：' + brandMoney.toFixed(2) + '元\n';
};

UpToTopReduce.wholeSupermarket = function(cartItems, topNum, savingNum) {
    var savingMoney = this.calculateSavingMoney(cartItems, topNum, savingNum);
    return '名称：满' + topNum + '减' + savingNum + '，金额：' + savingMoney.toFixed(2) + '元\n';
};

UpToTopReduce.calculateSavingMoney = function(cartItems, topNum, savingNum) {
    var money = 0;
    _.forEach(cartItems, function(cartItem) {
        money += cartItem.count * cartItem.getPrice();
    });
    return Math.floor(money / topNum) * savingNum;
};

module.exports = UpToTopReduce;