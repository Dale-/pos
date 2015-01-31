var Cashier = require('./model/cashier');



(function printInventory() {

  var collections = [
    { 'ITEM000000' : 20 },
    { 'ITEM000010' : 20 },
    { 'ITEM000005' : 30 },
    { 'ITEM000003' : 12 }
  ];

  console.log(Cashier.transfer(collections));
})();
