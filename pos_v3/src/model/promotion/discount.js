var _ = require('lodash');

function Discount() {

}

Discount.brand = function(cartItems, rate, brand) {
    var brandSavingMoney = 0;
    var savingRate = 1 - rate;
    _.forEach(cartItems, function(cartItem) {
        cartItem.isPromotion = true;
        brandSavingMoney += cartItem.count * cartItem.getPrice() * savingRate;
    });
    return '名称：' + brand + '品牌打折，金额：' + brandSavingMoney.toFixed(2) + '元\n';
};

Discount.item = function(cartItem, rate) {
    cartItem.isPromotion = true;
    var itemSavingMoney = cartItem.count * cartItem.getPrice() * (1 - rate);
    return '名称：' + cartItem.getName() + '单品打折，金额：' + itemSavingMoney.toFixed(2) + '元\n';
};

module.exports = Discount;