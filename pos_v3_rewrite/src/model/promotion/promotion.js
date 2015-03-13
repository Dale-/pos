var _ = require('lodash');

function Promotion(cartItems) {
    this.cartItems = cartItems;
}

Promotion.prototype.getBrandCartItems = function() {
    var brandCartItems = [];
    _.forEach(this.cartItems ,function(cartItem) {
        if(cartItem.getBrand() === this.brand) {
            brandCartItems.push(cartItem);
        }
    });
    return brandCartItems;
};

Promotion.prototype.getCartItem = function() {
    var cartItem =  _.find(this.cartItems ,function(cartItem) {
        return cartItem.getName() === this.itemName;
    });
    return cartItem;
};

Promotion.prototype.getTotalMoney = function(cartItems) {
    return _.reduce(cartItems, function(totalMoney, cartItem) {
        return totalMoney + cartItem.getSubTotal();
    });
};

Promotion.prototype.removeCartItem = function() {
    var newCartItems = [];
    _.forEach(this.cartItems, function(cartItem) {
        if(cartItem.getName() !== this.itemName) {
            newCartItems.push(cartItem);
        }
    });
    return newCartItems;
};