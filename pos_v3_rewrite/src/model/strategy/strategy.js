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

Strategy.prototype.removeItem = function(cartItems, itemName) {
    var newCartItems = [];
    _.forEach(cartItems, function(cartItem) {
        if(cartItem.getBrand() !== itemName) {
            newCartItems.push(cartItem);
        }
    });
    return newCartItems;
};

module.exports = Strategy;