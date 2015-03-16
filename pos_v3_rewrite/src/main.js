var _ = require('lodash');
var Cart = require('./model/cart');

run();

function run() {
    var collections = [{ 'ITEM000000' : 20 },
                       { 'ITEM000010' : 20 },
                       { 'ITEM000005' : 30 },
                       { 'ITEM000003' : 12 }];
    var strategyType = '1';
    main(collections, strategyType);
}

function main(collections, strategyType) {
    var cart = new Cart();
    _.forEach(collections, function(collection) {
        cart.addCartItem(collection);
    });
    console.log(cart.setStrategy(strategyType));
    //console.log(cart.toString(strategyType));
}
