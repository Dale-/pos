var _ = require('lodash');
var Item = require('./item');
var CartItem = require('./cart-item');

function Scanner() {

}

Scanner.scan = function(tag) {
    var array = tag.split('-');
    var barcode = array[0];
    var count = _.isUndefined(array[1]) ? 1 : parseInt(array[1]);
    var item = _.find(Item.all(),{barcode: barcode});
    return new CartItem(item, count);
};

module.exports = Scanner;