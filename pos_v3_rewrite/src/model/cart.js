var _ = require('lodash');
var Item = require('./item');
var CartItem = require('./cart-item');
var Transfer = require('../model/util/transfer');
var StrategyOne = require('../model/strategy/strategy-one');

function Cart() {
    this.cartItems = [];
    this.stategy = null;
}

Cart.prototype.addCartItem = function(tag) {
    var key = _.keys(tag)[0];
    var item = _.find(Item.all(), {barcode: key});
    this.cartItems.push(new CartItem(item, tag[key]));
    return this.cartItems;
};

Cart.prototype.buildListInfo = function() {
    var listInfo = '';
    _.forEach(this.cartItems, function(cartItem) {
        listInfo += cartItem.buildItemInfo();
    });
    return listInfo;
};

Cart.prototype.setStrategy = function(strategyType) {
    var strategyName = 'new Strategy' + Transfer.numberTransferEnglish(strategyType) + '()';
    this.stategy = eval(strategyName);
    return this.stategy.getPromotionInfo();
};

module.exports = Cart;