var _ = require('lodash');

function UpToTopReduce() {

}

UpToTopReduce.brand = function(cartItems, topNum, savingNum, brand) {
    var brandMoney = 0;
    _.forEach(cartItems, function(cartItem) {
        brandMoney += cartItem.count * cartItem.getPrice();
    });
    var brandMoney = Math.floor(brandMoney / topNum) * savingNum;
    return '名称：' + brand + '品牌满' + topNum + '减' + savingNum +'，金额：' + brandMoney.toFixed(2) + '元\n';

};

UpToTopReduce.wholeSupermarket = function(cartItems, topNum, savingNum) {
    var wholeMoney = 0;
    _.forEach(cartItems, function(cartItem) {
        wholeMoney += cartItem.count * cartItem.getPrice();
    });
    var savingMoney = Math.floor(wholeMoney / topNum) * savingNum;
    return '名称：满' + topNum + '减' + savingNum + '，金额：' + savingMoney.toFixed(2) + '元\n';
};

module.exports = UpToTopReduce;