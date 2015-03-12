var Cart = require('./model/cart');
var Cashier = require('./model/cashier');

function printInventory(collections, strategyType) {

  var cart = new Cart();
  cart.cartItems = Cashier.transfer(collections);
  console.log(cart.toString(strategyType));
}
