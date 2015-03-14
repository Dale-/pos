var _ = require('lodash');
var Item = require('./item');
var CartItem = require('./cart-item');

function Cart() {
    this.cartItems = [];
}

Cart.prototype.addCartItem = function(tag) {
    var key = _.keys(tag)[0];
    var item = _.find(Item.all(), {barcode: key});
    this.cartItems.push(new CartItem(item, tag[key]));
    return this.cartItems;
};

Cart.prototype.buildListInfo = function() {
    var listInfo = '';
    _.forEach(this.cartItems, function(cartItem) {
        listInfo += cartItem.buildItemInfo();
    });
    return listInfo;
};

module.exports = Cart;