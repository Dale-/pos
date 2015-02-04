var _ = require('lodash');

function Discount() {

}

Discount.brand = function(cartItems, rate, brand) {
    var brandSavingMoney = 0;
    var savingRate = 1 - rate;
    _.forEach(cartItems, function(cartItem) {
        brandSavingMoney += cartItem.count * cartItem.getPrice() * savingRate;
    });
    return '名称：' + brand + '品牌打折，金额：' + brandSavingMoney.toFixed(2) + '元';
};

module.exports = Discount;