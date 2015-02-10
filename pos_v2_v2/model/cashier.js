var _ = require('lodash');
var Cart = require('./cart');
var Scanner = require('./scanner');

function Cashier() {

}

Cashier.transfer = function(tags) {
    var cart = new Cart();
    _.forEach(tags, function(tag) {
        cart.addCartItem(Scanner.scan(tag));
    });
    return cart.cartItems;
};

module.exports = Cashier;