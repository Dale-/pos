var _ = require('lodash');
var Cart = require('./cart');

function Cashier() {

}

Cashier.transfer = function(collections) {
    var cart = new Cart();
    _.forEach(collections, function(collection) {
        cart.addCartItem(collection);
    });
    return cart.cartItems;
};

module.exports = Cashier;
