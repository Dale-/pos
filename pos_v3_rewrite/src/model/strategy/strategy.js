var _ = require('lodash');

function Strategy(cartItems) {
    this.cartItems = cartItems;
    this.promotionMoney = 0;
}

Strategy.prototype.removeBrand = function(brand) {
    var newCartItems = [];
    _.forEach(this.cartItems, function(cartItem) {
        if(cartItem.getBrand() !== brand) {
            newCartItems.push(cartItem);
        }
    });
    return newCartItems;
};

Strategy.prototype.removeCartItemFromCartItems = function(cartItems, itemName) {
    var newCartItems = [];
    _.forEach(cartItems, function(cartItem) {
        if(cartItem.getName() !== itemName) {
            newCartItems.push(cartItem);
        }
    });
    return newCartItems;
};

Strategy.prototype.removeCartItem = function(itemName) {
    var newCartItems = [];
    _.forEach(this.cartItems, function(cartItem) {
        if(cartItem.getName() !== itemName) {
            newCartItems.push(cartItem);
        }
    });
    return newCartItems;
};

Strategy.prototype.findBrandCartItems = function(brand) {
    var newCartItems = [];
    _.forEach(this.cartItems, function(cartItem) {
        if(cartItem.getBrand() === brand) {
            cartItem.isBrandDiscount = true;
            newCartItems.push(cartItem);
        }
    });
    return newCartItems;
};

Strategy.prototype.findCartItem = function(itemName) {
    var newCartItem =  _.find(this.cartItems ,function(cartItem) {
        return cartItem.getName() === itemName;
    });
    newCartItem.isItemDiscount = true;
    return newCartItem;
};

Strategy.prototype.getTotalMoney = function(cartItems) {

    return _.reduce(cartItems, function(totalMoney, cartItem) {
        return totalMoney + cartItem.getSubTotal();
    }, 0);
};

Strategy.prototype.getAppointedSubTotal = function(itemName) {
    _.forEach(this.cartItems, function(cartItem) {
       if(cartItem.getName() === itemName) {
           return cartItem.getSubTotal();
       }
    });
};

module.exports = Strategy;