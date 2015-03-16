var Promotion = require('../promotion');
var Transfer = require('../../util/transfer');

function Discount(discountRate) {
    this.discountRate = discountRate;
}

Discount.prototype = Object.create(Promotion.prototype);
Discount.prototype.constructor = Discount;

Discount.prototype.getPromotionMoney = function() {
    this.getBePromotionMoney();
    //var promotionMoney = (this.bePromotionMoney * (1 - this.discountRate)).toFixed(2);
    //strategy.promotionMoney += FLoat.parse(promotionMoney);
    return (this.bePromotionMoney * (1 - this.discountRate)).toFixed(2);
};

Discount.prototype.numberTransferCharacter = function(number) {
    return  Transfer.numberTransferCharacter(Math.floor(number / 10)) +
            Transfer.numberTransferCharacter(number % 10);
};

module.exports = Discount;