var Cart = require('./model/cart');
var Cashier = require('./model/cashier');

(function printInventory() {

  var collections = [
    { 'ITEM000000' : 20 },
    { 'ITEM000010' : 30 },
    { 'ITEM000001' : 30 },
    { 'ITEM000007' : 40 },
    { 'ITEM000003' : 8  },
    { 'ITEM000002' : 14 }
  ];
  var strategyType = '4';

  var cart = new Cart();
  cart.cartItems = Cashier.transfer(collections);
  console.log(cart.toString(strategyType));
})();
