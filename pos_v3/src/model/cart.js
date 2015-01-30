var _ = require('lodash');
var Item = require('./item');

function Cart() {
  this.cartItems = [];
}

Cart.prototype.addCartItem = function(tag) {
  for(var key in tag) {
    var item = _.find(Item.all(), {barcode: key});

  }
};

module.exports = Cart;
