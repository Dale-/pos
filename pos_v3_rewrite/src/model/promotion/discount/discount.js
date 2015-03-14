var Promotion = require('../promotion');
var Transfer = require('../../util/transfer');

function Discount(discountRate, cartItems) {
    Promotion.call(this, cartItems);
    this.discountRate = discountRate;
}

Discount.prototype = Object.create(Promotion.prototype);
Discount.prototype.constructor = Discount;

Discount.prototype.getPromotionMoney = function() {
    this.getBePromotionMoney();
    return (this.bePromotionMoney * (1 - this.discountRate)).toFixed(2);
};

Discount.prototype.numberTransferCharacter = function(number) {
    this.characterDiscount =  Transfer.numberTransferCharacter(Math.floor(number/10)) +
                              Transfer.numberTransferCharacter(number%10);
    return this.characterDiscount;
};

module.exports = Discount;