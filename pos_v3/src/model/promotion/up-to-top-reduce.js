var _ = require('lodash');

function UpToTopReduce() {

}

UpToTopReduce.wholeSupermarket = function(cartItems, topNum, savingNum) {
    var wholeMoney = 0;
    _.forEach(cartItems, function(cartItem) {
        wholeMoney += cartItem.count * cartItem.getPrice();
    });
    var savingMoney = Math.floor(wholeMoney / topNum) * savingNum;
    return '名称：满' + topNum + '减' + savingNum + '，金额：' + savingMoney.toFixed(2) + '元\n';
};

module.exports = UpToTopReduce;