var _ = require('lodash');

function Promotion() {
}

//Promotion.prototype.getBrandCartItems = function() {
//    var brandCartItems = [];
//    var brand = this.brand;
//
//    _.forEach(this.cartItems ,function(cartItem) {
//        if(cartItem.getBrand() === brand) {
//            cartItem.isBrandDiscount = true;
//            brandCartItems.push(cartItem);
//        }
//    });
//    return brandCartItems;
//};

//Promotion.prototype.getCartItem = function() {
//    var itemName = this.itemName;
//    var newCartItem =  _.find(this.cartItems ,function(cartItem) {
//        return cartItem.getName() === itemName;
//    });
//    newCartItem.isItemDiscount = true;
//    return newCartItem;
//};

Promotion.prototype.getTotalMoney = function(cartItems) {

    return _.reduce(cartItems, function(totalMoney, cartItem) {
        return totalMoney + cartItem.getSubTotal();
    }, 0);
};

//Promotion.prototype.removeCartItem = function() {
//    var newCartItems = [];
//    var itemName = this.itemName;
//    _.forEach(this.cartItems, function(cartItem) {
//        if(cartItem.getName() !== itemName) {
//            newCartItems.push(cartItem);
//        }
//    });
//    return newCartItems;
//};

module.exports = Promotion;