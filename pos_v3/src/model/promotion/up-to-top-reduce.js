var _ = require('lodash');

function UpToTopReduce() {

}

UpToTopReduce.item = function(cartItem, topNum, savingNum) {
    var itemMoney = cartItem.getPrice() * cartItem.count;
    var savingMoney = Math.floor(itemMoney / topNum) * savingNum;
    cartItem.isPromotion = true;
    cartItem.subPromotionTotal = cartItem.count * cartItem.getPrice() - savingMoney;
    return '名称：' + cartItem.getName() + '满' + topNum + '减' + savingNum + '，金额：' + savingMoney.toFixed(2) + '元\n';
};

UpToTopReduce.brand = function(cartItems, topNum, savingNum, brand) {
    var brandMoney = this.calculateSavingMoney(cartItems, topNum, savingNum);
    UpToTopReduce.setBrandSubPromotion(cartItems, brandMoney);
    return '名称：' + brand + '品牌满' + topNum + '减' + savingNum +'，金额：' + brandMoney.toFixed(2) + '元\n';
};

UpToTopReduce.wholeSupermarket = function(cartItems, topNum, savingNum) {
    var savingMoney = this.calculateSavingMoney(cartItems, topNum, savingNum);
    return '名称：满' + topNum + '减' + savingNum + '，金额：' + savingMoney.toFixed(2) + '元\n';
};

UpToTopReduce.setBrandSubPromotion = function(cartItems, brandMoney) {
    var subPromotionMoney = brandMoney / (cartItems.length);
    _.forEach(cartItems, function(cartItem) {
        cartItem.subPromotionTotal = cartItem.getPrice() * cartItem.count - subPromotionMoney;
    });
};

UpToTopReduce.calculateSavingMoney = function(cartItems, topNum, savingNum) {
    var money = 0;
    _.forEach(cartItems, function(cartItem) {
        cartItem.isPromotion = true;
        if(cartItem.subPromotionTotal) {
            money += cartItem.subPromotionTotal;
        }else {
            money += cartItem.count * cartItem.getPrice();
        }
    });
    return Math.floor(money / topNum) * savingNum;
};

module.exports = UpToTopReduce;