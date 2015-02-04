var _ = require('lodash');

function Discount() {

}

Discount.brand = function(cartItems, rate, brand) {
    var brandTotalMoney = 0;
    _.forEach(cartItems, function(cartItem) {
        brandTotalMoney += cartItem.count * c
    });


};