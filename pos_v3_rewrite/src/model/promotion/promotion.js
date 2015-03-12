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