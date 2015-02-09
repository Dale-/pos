var _ = require('lodash');
var moment = require('moment');

function Cart() {
    this.cartItems = [];
}

Cart.prototype.addCartItem = function(cartItem) {
    var CartItems = this.cartItems;
    var exitCartItem =  _.find(CartItems, {item: cartItem.item});
    if(exitCartItem) {
        exitCartItem.count += cartItem.count;
    } else {
        CartItems.push(cartItem);
    }
    return CartItems;
};

Cart.prototype.getListText = function() {
    var CartItems = this.cartItems;
    var listText = '';
    _.forEach(CartItems, function(cartItem) {
        listText += cartItem.toListText();
    });
    return listText;
};

Cart.prototype.getPromotionText = function() {
    var CartItems = this.cartItems;
    var promotionText = '';
    _.forEach(CartItems, function(cartItem) {
        promotionText += cartItem.toPromotionText();
    });
    return promotionText;
};

Cart.prototype.getTotalMoney = function() {
    var CartItems = this.cartItems;
    var totalMoney = 0;
    _.forEach(CartItems, function(cartItem) {
        totalMoney += cartItem.getSubTotal();
    });
    return totalMoney.toFixed(2);
};

Cart.prototype.getSavingMoney = function() {
    var CartItems = this.cartItems;
    var savingMoney = 0;
    _.forEach(CartItems, function(cartItem) {
        savingMoney += cartItem.promotionPrice;
    });
    return savingMoney;
};

Cart.prototype.toString = function() {

    return '***<没钱赚商店>购物清单***\n' +
        '打印时间：' + moment().format('YYYY年MM月DD日 HH:mm:ss') + '\n' +
        '----------------------\n' + this.getListText() +
        '----------------------\n' + '挥泪赠送商品：\n' + this.getPromotionText() +
        '----------------------\n' +
        '总计：' + this.getTotalMoney() + '\n' +
        '节省：' + this.getSavingMoney() + '\n' +
        '**********************';
};

module.exports = Cart;