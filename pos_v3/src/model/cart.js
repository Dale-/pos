var _ = require('lodash');
var Item = require('./item');
var moment = require('moment');
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

Cart.prototype.getListInfo = function() {
  var cartItems = this.cartItems;
  var listText = '';
  _.forEach(cartItems, function(cartItem) {
    listText += cartItem.toListText();
  });
  return listText;
};

Cart.prototype.toString = function() {
  return '***<没钱赚商店>购物清单***\n' + '打印时间：' +
         moment().format('YYYY年MM月DD日 HH:mm:ss') +
         '\n\n----------------------' + this.getListInfo();
};

module.exports = Cart;
