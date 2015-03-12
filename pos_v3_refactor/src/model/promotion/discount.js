var _ = require('lodash');

function Discount() {

}

Discount.brand = function(cartItems, rate, brand) {
    var brandSavingMoney = 0;
    var savingRate = (1 - rate).toFixed(2);
    _.forEach(cartItems, function(cartItem) {
        cartItem.isPromotion = true;
        if(cartItem.subPromotionTotal) {
            brandSavingMoney += cartItem.subPromotionTotal * savingRate;
            cartItem.subPromotionTotal *= rate;
        } else {
            brandSavingMoney += cartItem.count * cartItem.getPrice() * savingRate;
            cartItem.subPromotionTotal =
                cartItem.count * cartItem.getPrice() - cartItem.count * cartItem.getPrice() * savingRate;
        }
    });
    return '名称：' + brand + '品牌打折，金额：' + brandSavingMoney.toFixed(2) + '元\n';
};

Discount.item = function(cartItem, rate) {
    cartItem.isPromotion = true;
    cartItem.subPromotionTotal = cartItem.count * cartItem.getPrice() * rate;
    var itemSavingMoney = cartItem.count * cartItem.getPrice() * (1 - rate);
    return '名称：' + cartItem.getName() + '单品打折，金额：' + itemSavingMoney.toFixed(2) + '元\n';
};

Discount.wholeSupermarket = function(cartItems, rate) {
    var savingMoney = 0;
    var savingRate = (1 - rate).toFixed(2);
    _.forEach(cartItems, function(cartItem) {

        if(cartItem.subPromotionTotal) {
            savingMoney += (cartItem.subPromotionTotal * savingRate);
        } else {
            savingMoney += (cartItem.count * cartItem.getPrice() * savingRate);
        }
    });
    return '名称：' + rate * 10 + '折，金额：' + savingMoney.toFixed(2) + '元\n';
};

module.exports = Discount;