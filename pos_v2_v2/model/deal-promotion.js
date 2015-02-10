var _ = require('lodash');

function DealPromotion() {

}

DealPromotion.calculatePromotion = function(cartItem, promotions) {
    if(_.contains(promotions.barcodes, cartItem.getBarcode())) {
        cartItem.promotionCount = Math.floor(cartItem.count / 3);
        cartItem.promotionPrice = cartItem.promotionCount * cartItem.getItemPrice();
    }
};

DealPromotion.traversalCartItem = function(cartItems, promotions) {
    _.forEach(cartItems, function(cartItem) {
        DealPromotion.calculatePromotion(cartItem, promotions);
    });
};

module.exports = DealPromotion;