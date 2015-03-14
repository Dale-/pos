var Strategy = require('./strategy-one');

function StrategyOne(cartItems) {
    Strategy.call(this, cartItems);
}

StrategyOne.prototype = Object.create(Strategy.prototype);
StrategyOne.prototype.constructor = StrategyOne;

module.exports = StrategyOne;
