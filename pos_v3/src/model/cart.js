var _ = require('lodash');
var Item = require('./item');
var CartItem = require('./cart-item');

function Cart() {
  this.cartItems = [];
}

Cart.prototype.addCartItem = function(tag) {
  for(var key in tag) {
    var item = _.find(Item.all(), {barcode: key});
    this.cartItems.push(new CartItem(item, tag[key]));
  }
  return this.cartItems;
};

module.exports = Cart;
