var Strategy = require('../strategy-one');
var ItemDiscount = require('../promotion/discount/item-discount');
var BrandDiscount = require('../promotion/discount/brand-discount');

function StrategyOne(cartItems) {
    Strategy.call(this, cartItems);
}

StrategyOne.prototype = Object.create(Strategy.prototype);
StrategyOne.prototype.constructor = StrategyOne;

StrategyOne.prototype.execute = function() {

};

StrategyOne.brandDiscount = function() {
    return [new BrandDiscount(0.9, this.cartItems, '可口可乐')];
};

StrategyOne.itemDiscount = function() {
    return [new ItemDiscount(0.95, this.cartItems, '可口可乐350ml')];
};

module.exports = StrategyOne;
