var Cart = require('./model/cart');
var Cashier = require('./model/cashier');

(function printInventory() {

  var collections = [
    { 'ITEM000000' : 20 },
    { 'ITEM000010' : 20 },
    { 'ITEM000005' : 30 },
    { 'ITEM000008' : 25 },
    { 'ITEM000003' : 8  },
    { 'ITEM000002' : 14 }
  ];
  var strategyType = '2';

  var cart = new Cart();
  cart.cartItems = Cashier.transfer(collections);
  console.log(cart.toString(strategyType));
})();
