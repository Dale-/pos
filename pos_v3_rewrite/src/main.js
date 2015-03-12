var Cart = require('./model/cart');

run();

function run() {
    var collections = [
        { 'ITEM000000' : 20 },
        { 'ITEM000010' : 30 },
        { 'ITEM000001' : 30 },
        { 'ITEM000007' : 40 },
        { 'ITEM000003' : 8  },
        { 'ITEM000002' : 14 }
    ];
    var strategyType = '4';
    main(collections, strategyType);
}

function main(collections, strategyType) {
    var cart = new Cart();
    _.forEach(collections, function(collection) {
        cart.addCartItem(collection);
    });
    console.log(cart.toString(strategyType));
}
